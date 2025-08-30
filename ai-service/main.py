from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="AI Service", version="0.1.0")

class GameState(BaseModel):
    ball_x: float
    ball_y: float
    player_x: float
    player_y: float

class Action(BaseModel):
    move_left: bool = False
    move_right: bool = False
    jump: bool = False
    kick: bool = False

@app.get("/health")
def health():
    return {"ok": True}

@app.post("/ai/decision", response_model=Action)
def decision(state: GameState):
    # Very naive demo: chase the ball
    move_left = state.player_x > state.ball_x
    move_right = state.player_x < state.ball_x
    return Action(move_left=move_left, move_right=move_right, jump=False, kick=False)
