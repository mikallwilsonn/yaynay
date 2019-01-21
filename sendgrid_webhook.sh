function localtunnel {
  lt -s emailapp090419892019asdf --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done