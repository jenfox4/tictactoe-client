# TOKEN='BAhJIiUyZDQ2Yzk5YjdiNGI4YmZhNmMyZGYzYjAyMzhlMGUwMQY6BkVG--cf5e27630c5a97575703bca79ebc095e6d681d8a' sh signout.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/sign-out" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"
