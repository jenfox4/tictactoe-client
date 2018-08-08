# EMAIL='jf@fox' PASSWORD='j' sh signin.sh

curl --include --request POST "https://tic-tac-toe-wdi.herokuapp.com/sign-in" \
  --header "Content-Type: application/json" \
  --data '{
      "credentials": {
        "email": "'"${EMAIL}"'",
        "password": "'"${PASSWORD}"'"
      }
    }'
