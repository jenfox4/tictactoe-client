# EMAIL='j@fox' PASSWORD='j' sh signup.sh

curl --include --request POST "https://tic-tac-toe-wdi.herokuapp.com/sign-up" \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'
