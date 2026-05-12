import json
import httpx
import redis.asyncio as redis
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["GET"],
    allow_headers=["*"],
)

POKEAPI_BASE = "https://pokeapi.co/api/v2"
CACHE_TTL = 86400  # 24 hours — pokemon data never changes

redis_client = redis.from_url("redis://localhost:6379", decode_responses=True)


@app.get("/api/pokemon")
async def list_pokemon(limit: int = 20, offset: int = 0):
    cache_key = f"pokemon:list:{limit}:{offset}"

    cached = await redis_client.get(cache_key)
    if cached:
        return json.loads(cached)

    async with httpx.AsyncClient() as client:
        response = await client.get(f"{POKEAPI_BASE}/pokemon", params={"limit": limit, "offset": offset})
        if response.status_code != 200:
            raise HTTPException(status_code=response.status_code, detail="PokeAPI error")
        data = response.json()

    await redis_client.setex(cache_key, CACHE_TTL, json.dumps(data))
    return data


@app.get("/api/pokemon/{name_or_id}")
async def get_pokemon(name_or_id: str):
    cache_key = f"pokemon:detail:{name_or_id}"

    cached = await redis_client.get(cache_key)
    if cached:
        return json.loads(cached)

    async with httpx.AsyncClient() as client:
        response = await client.get(f"{POKEAPI_BASE}/pokemon/{name_or_id}")
        if response.status_code != 200:
            raise HTTPException(status_code=response.status_code, detail="PokeAPI error")
        data = response.json()

    await redis_client.setex(cache_key, CACHE_TTL, json.dumps(data))
    return data
