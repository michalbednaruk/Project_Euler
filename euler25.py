import math

def fibonacci(n):
    PHI = (1 - math.sqrt(5)) / 2
    result = (math.pow(PHI, n) - math.pow((1 - PHI), n)) / math.sqrt(5)
    return int(result)

int()
print (-1 * fibonacci(12))

for i in range(100_000_000):
    if len(str(-1 * fibonacci(i))) == 1000:
        print(i)
    pass

# function fibonacci(n) {
#   const PHI = (1 - Math.sqrt(5)) / 2;
#   let result = (Math.pow(PHI, n) - Math.pow(1 - PHI, n)) / Math.sqrt(5);
#   return result;
# }