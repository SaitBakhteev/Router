import uvicorn
import asyncio
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(CORSMiddleware,
                   allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])



@app.get('/object')
async def get_object():
    await asyncio.sleep(1)
    return {'message': 'Hello World'}


if __name__ == '__main__':
    # Передаем сам объект app, а не строку "main:app"
    uvicorn.run(app, host="0.0.0.0", port=8000)