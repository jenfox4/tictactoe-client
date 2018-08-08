# TOKEN='BAhJIiU1NmY1ZjE1MzZjMDlmNDhjNDNlYzUwMzNmYjZkOGE1YQY6BkVG--184944560f17c8ed71832ebe36732640b963c8c3' sh game/allpastgames.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/games/:${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
  "game": {
    "cell": {
      "index": "'"${INDEX}"'",
      "value": "'"${VALUE}"'"
    },
    "over": "'"${OVER}"'"
  }
}
