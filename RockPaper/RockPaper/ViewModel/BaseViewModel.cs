using System;
using System.ComponentModel;
using System.Runtime.CompilerServices;
using Xamarin.Forms;

namespace RockPaper.ViewModel
{
    public class BaseViewModel : INotifyPropertyChanged
    {


        protected Page currentPage
        {
            get;
            set;
        }

        public INavigation Navigation
        {
            get
            {
                return currentPage.Navigation;
            }
        }

        public void setNavigationBar(bool val)
        {
            NavigationPage.SetHasNavigationBar(currentPage, val);
        }

        public void DisplayError(string message)
        {
            currentPage.DisplayAlert("Başarısız", message, "Tamam");
        }
        public void DisplaySuccess(string message)
        {
            currentPage.DisplayAlert("Başarılı", message, "Tamam");
        }


        public BaseViewModel(Page currentPage)
        {
            this.currentPage = currentPage;

        }

        #region Değişiklikleri yakalama
        public event PropertyChangedEventHandler PropertyChanged;

        public virtual void OnPropertyChanged([CallerMemberName] string propertyName = null)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }

        #endregion
    }
}
