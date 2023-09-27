using System.Runtime.Serialization;

namespace _5W5_formatif1.Services
{
    //[Serializable]
    public class AreYouInsaneException : Exception

    {

        public AreYouInsaneException(string message) : base(message) { }

    }
}