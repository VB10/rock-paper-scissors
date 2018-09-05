using System;
using System.Collections.Generic;
using RockPaper.ViewModel;
using Xamarin.Forms;

namespace RockPaper.View
{
    public partial class GamePage : ContentPage
    {
        GameViewModel gameViewModel;
        public GamePage()
        {
            InitializeComponent();
            BindingContext = gameViewModel = new GameViewModel(this);
        }
    }
}
