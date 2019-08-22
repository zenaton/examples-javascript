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
#  if cmp --silent ./zenaton.out ./tests/$($basename)_expected_output ; then
#    echo "Command succeeded"
#    exit 0
#  else
#    echo "Tests failed"
#    echo "Expected:"
#    cat ./tests/$($basename)_expected_output
#    echo "Got:"
#    cat ./zenaton.out
#    exit 1
#  fi
done

