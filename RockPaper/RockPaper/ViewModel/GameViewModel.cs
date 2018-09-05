using System;
using System.Windows.Input;
using Xamarin.Forms;
using static RockPaper.Helper.BaseEnum;

namespace RockPaper.ViewModel
{
    public class GameViewModel : BaseViewModel
    {


        public GameViewModel(Page page) : base(page)
        {

        }

        public ICommand objectCommand
        {
            get
            {
                return new Command((obj) =>
                {
                    var selectValue = (string)obj;

                    switch (selectValue)
                    {
                        case "R": playGame(Objects.ROCK); break;
                        case "P": playGame(Objects.PAPER); break;
                        default:
                            playGame(Objects.SCISSORS); break;
                    }
                });
            }
        }

        void playGame(Objects userSelected)
        {
            var value = (new Random()).Next(0, 100);
            var computerChoose = Objects.ROCK;
            var result = false;

            if (value < 34) computerChoose = Objects.ROCK;
            else if (value <= 67) computerChoose = Objects.PAPER;
            else computerChoose = Objects.PAPER;


            switch (computerChoose)
            {
                case Objects.PAPER:
                    switch (userSelected)
                    {
                        case Objects.PAPER: break;
                        case Objects.ROCK: break;
                        default:
                            result = true;
                            break;
                    }

                    break;
                case Objects.ROCK:
                    switch (userSelected)
                    {
                        case Objects.SCISSORS: break;
                        case Objects.ROCK: break;
                        default:
                            result = true;
                            break;
                    }

                    break;
                case Objects.SCISSORS:
                    switch (userSelected)
                    {
                        case Objects.SCISSORS: break;
                        case Objects.PAPER: break;
                        default:
                            result = true;
                            break;
                    }

                    break;
                default:
                    break;
            }

            if (result) DisplaySuccess("Won");
            else DisplayError("Loose");
  

        }


    }
}
