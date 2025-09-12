namespace Banking_Application
{
    internal class Program
    {
        static void Main(string[] args)
        {

            static String createAccount(int accountNumber)
            {
                Console.WriteLine("Creating a new account...");
                Console.Write("Enter account holder's name: ");
                string name = Console.ReadLine();

                Console.WriteLine($"Account created successfully! Account Number: {accountNumber}, Holder's Name: {name}");
                return name;
            }



            static int deposit(int accountNumber)
            {
                Console.WriteLine("Depositing money...");
                Console.Write("Enter amount to deposit: ");
                int amount = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine($"Successfully deposited {amount:C} to account {accountNumber}.");
                return amount;
            }



            static int withdraw(int balance, int accountNumber)
            {
                Console.WriteLine("Withdrawing money...");
                Console.Write("Enter amount to withdraw: ");
                int amount = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine($"Successfully withdrew {amount:C} from account {accountNumber}.");
                return amount;
            }

            int accountNumber = 123456;
            int balance = 0;
            Console.WriteLine("Welcome to the Banking Application!");
            Console.WriteLine("1. Create New Account");
            Console.WriteLine("2. Deposit Money");
            Console.WriteLine("3. Withdraw Money");
            Console.WriteLine("4. Display Account Details");
            Console.WriteLine("5. Exit");
            int ans = Convert.ToInt32(Console.ReadLine());
            String accountname = "";

            while (ans != 5)
            {
                if (ans == 1)
                {
                    accountname = createAccount(accountNumber);
                    Console.WriteLine("Welcome to the Banking Application!");
                    Console.WriteLine("1. Create New Account");
                    Console.WriteLine("2. Deposit Money");
                    Console.WriteLine("3. Withdraw Money");
                    Console.WriteLine("4. Display Account Details");
                    Console.WriteLine("5. Exit");
                    Console.WriteLine("Enter other number access different functionality");
                    ans = Convert.ToInt32(Console.ReadLine());
                }


                else if (ans == 2)
                {
                    Console.WriteLine("Enter Account Number");
                    int temp = Convert.ToInt32(Console.ReadLine());
                    if (temp != accountNumber)
                    {
                        Console.WriteLine("No account found");
                    }
                    else
                    {
                        int tbal = deposit(accountNumber);
                        balance = balance + tbal;

                    }
                    Console.WriteLine("Welcome to the Banking Application!");
                    Console.WriteLine("1. Create New Account");
                    Console.WriteLine("2. Deposit Money");
                    Console.WriteLine("3. Withdraw Money");
                    Console.WriteLine("4. Display Account Details");
                    Console.WriteLine("5. Exit");
                    Console.WriteLine("Enter other number access different functionality");
                    ans = Convert.ToInt32(Console.ReadLine());
                }

                else if (ans == 3)
                {
                    Console.WriteLine("Enter Account Number");
                    int temp = Convert.ToInt32(Console.ReadLine());
                    if (temp != accountNumber)
                    {
                        Console.WriteLine("No account found");
                    }
                    else
                    {
                        int tbal = withdraw(balance, accountNumber);
                        balance = balance - tbal;
                    }
                    Console.WriteLine("Welcome to the Banking Application!");
                    Console.WriteLine("1. Create New Account");
                    Console.WriteLine("2. Deposit Money");
                    Console.WriteLine("3. Withdraw Money");
                    Console.WriteLine("4. Display Account Details");
                    Console.WriteLine("5. Exit");
                    Console.WriteLine("Enter other number access different functionality");
                    ans = Convert.ToInt32(Console.ReadLine());
                }

                else if (ans == 4)
                {

                    Console.WriteLine("Enter Account Number");
                    int tan = Convert.ToInt32(Console.ReadLine());
                    if (tan != accountNumber)
                    {
                        Console.WriteLine("No account found");
                    }
                    else
                    {
                        Console.WriteLine($"Account Number: {accountNumber}, Balance: {balance}");
                    }
                    Console.WriteLine("Welcome to the Banking Application!");
                    Console.WriteLine("1. Create New Account");
                    Console.WriteLine("2. Deposit Money");
                    Console.WriteLine("3. Withdraw Money");
                    Console.WriteLine("4. Display Account Details");
                    Console.WriteLine("5. Exit");
                    Console.WriteLine("Enter other number access different functionality");
                    ans = Convert.ToInt32(Console.ReadLine());
                }

                else if (ans == 5)
                {
                    Console.WriteLine("Thank you");
                }
                else
                {
                    Console.WriteLine("Welcome to the Banking Application!");
                    Console.WriteLine("1. Create New Account");
                    Console.WriteLine("2. Deposit Money");
                    Console.WriteLine("3. Withdraw Money");
                    Console.WriteLine("4. Display Account Details");
                    Console.WriteLine("5. Exit");
                    Console.WriteLine("Invalid");
                    Console.WriteLine("Enter other number access different functionality");
                    ans = Convert.ToInt32(Console.ReadLine());
                }
            }

        }
    }   
}
