using System;
using System.Numerics;

namespace euler16
{
    class Program
    {
        static void Main(string[] args)
        {
            
            BigInteger result = BigInteger.Pow(2, 1000);
            BigInteger sum = 0;
            while (result > 0) {
                sum += result % 10;
                result /= 10;
            }
            Console.WriteLine(sum);
        }
    }
}
