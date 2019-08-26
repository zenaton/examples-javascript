zenaton listen --env=.env --boot=boot.js

for filename in ./bin/*; do
  echo "Testing $filename ..."
  rm -f zenaton.out
  rm -f zenaton.err
  touch zenaton.out
  touch zenaton.err
  basename=$(basename "$filename" .js)
  node $filename
  sleep 30
  cp zenaton.out ./test/output/${basename}.out
  cp zenaton.err ./test/output/${basename}.err
done

