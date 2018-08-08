# ID=56 TOKEN='BAhJIiU1NmY1ZjE1MzZjMDlmNDhjNDNlYzUwMzNmYjZkOGE1YQY6BkVG--184944560f17c8ed71832ebe36732640b963c8c3' sh game/showindexgame.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
