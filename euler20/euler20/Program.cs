using System;
using System.Numerics;

namespace euler20
{
    class Program
    {
        static void Main(string[] args)
        {
            BigInteger factorial(BigInteger n) {
                if (n == 1) return 1;
                else return n * factorial(n - 1);
            }
            BigInteger answer = factorial(100);
            BigInteger sum = 0;
            while (answer > 0) {
                sum += answer % 10;
                answer /= 10;
            }
            Console.WriteLine(sum);
        }
    }
}
