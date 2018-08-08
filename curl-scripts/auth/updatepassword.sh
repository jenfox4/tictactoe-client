# TOKEN='BAhJIiUyZDQ2Yzk5YjdiNGI4YmZhNmMyZGYzYjAyMzhlMGUwMQY6BkVG--cf5e27630c5a97575703bca79ebc095e6d681d8a' OLD='j' NEW='k' sh updatepassword.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
      "passwords": {
        "old": "'"${OLD}"'",
        "new": "'"${NEW}"'"
      }
    }'
