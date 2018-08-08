# EMAIL='jf@fox' PASSWORD='j' sh auth/signin.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
      "credentials": {
        "email": "'"${EMAIL}"'",
        "password": "'"${PASSWORD}"'"
      }
    }'
