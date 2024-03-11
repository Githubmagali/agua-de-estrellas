"use client"
import { useState} from "react"
import CustomAlert from "@/components/alert";



function Contact(){

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [alertMessage, setAlertMessage] = useState("");
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const [alertType, setAlertType] = useState("");
  
    const handleSendEmail = async () => {
      setIsAlertVisible(true);
  
  
      if (fullName === '' || email === '' || message === '') {
        setAlertMessage("Complete all fields");
        setIsAlertVisible(true);
  
  
        return;
  
      }
  
      try {
        const res = await fetch('/api/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullName,
            email,
            message,
          }),
        });
  
  
        if (res.ok) {
          setAlertMessage("Message sent succesfully");
        } else {
          setAlertMessage("Error sending message");
        }
      } catch (error) {
        console.error("Error sending email:", error);
        setAlertMessage("Error sending message");
      }
  
  
  
      setFullName("");
      setEmail("");
      setMessage("");
  
      setTimeout(() => {
        setIsAlertVisible(false);
        setAlertMessage("");
      }, 2000);
  
    };

    return(
        
      <div className="flex  flex-col items-center justify-center sm:text-center px-9 " id="contact">
      <p className="text-gray-800 md:text-3xl pt-20">Contactame</p>
      <form className="py-10">
        <input type="text" id="title" className="border p-2 mb-4 w-full rounded" placeholder="Nombre completo"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)} />
        <input type="email" id="email" placeholder="Email" className="border p-2 mb-4 w-full rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        <textarea id="description" className="border p-2 mb-4 w-full resize-none rounded"
          value={message}
          onChange={(e) => setMessage(e.target.value)}></textarea>
        <button className="border rounded border-gray-300 hover:border-gray-800 px-3 py-2"
          onClick={(e) => {
            e.preventDefault();
            handleSendEmail();
          }}
        >
          Enviar
        </button>
        {isAlertVisible && (
          <CustomAlert
            message={alertMessage}
            onClose={() => setIsAlertVisible(false)}
            alertType={alertType}
          />
        )}

      </form>
    </div>
    )
}

export default Contact