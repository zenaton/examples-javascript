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
  if cmp --silent ./zenaton.out ./test/output/${basename}.out ; then
    echo "Test .out succeeded"
  else
    echo "Tests .out failed"
    echo "Expected:"
    cat ./test/output/${basename}.out
    echo "Got:"
    cat ./zenaton.out
    exit 1
  fi
  if cmp --silent ./zenaton.err ./test/output/${basename}.err ; then
    echo "Test .err succeeded"
  else
    echo "Tests .err failed"
    echo "Expected:"
    cat ./test/output/${basename}.err
    echo "Got:"
    cat ./zenaton.err
    exit 1
  fi
done
