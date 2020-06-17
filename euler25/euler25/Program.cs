using System;
using System.Numerics;

namespace euler25
{
    class Program
    {
        public static int Fib(int n1)
        {
            //if ( (n1 == 1) || (number == 2) )
            if (n1 <= 2)
                return 1;
            else
                return Fib(n1 - 1) + Fib(n1 - 2);
        }
        static void Main(string[] args)
        {

            

            for(var i = 0; i <= 1_000_000; i++)
            {
                string temp = Fib(i).ToString();
                BigInteger num = BigInteger.Parse(temp);

                if (num.ToString().Length == 1000) Console.WriteLine(i);
            }

        }
    }
}
