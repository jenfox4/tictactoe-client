# TOKEN='BAhJIiUxNTEyODY5ODBlNTI3NzJhODY4MjcwYzA2YmU3NzA1NwY6BkVG--008de93c2b451d8a024c6d0fc41c4435cc2f67df' sh game/allpastgames.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/games" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
