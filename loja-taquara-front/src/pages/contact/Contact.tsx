import { useState } from "react"
import IForm from "../../interfaces/IForm";

export default function(){


    const [form, setForm] = useState<IForm>({
        name: '', email: '', subject: '', message: ''
    });

    const handleChange = (event:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        setForm({
          ...form,
          [event.target.name]: event.target.value,
        });
      };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(form);
    }

    return (
        <section className="contact">
            <form onSubmit={onSubmit} className="contact-form">
                <label className="contact-form__label">
                    Seu nome
                    <input 
                        type="text" 
                        name="name" 
                        onChange={handleChange}
                        className="contact-form__input"
                    />
                </label>

                <label className="contact-form__label">
                    Seu e-mail
                    <input 
                        type="email" 
                        name="email" 
                        onChange={handleChange}
                        className="contact-form__input"
                    />
                </label>

                <label className="contact-form__label">
                    Assunto
                    <input 
                        type="text" 
                        name="subject" 
                        onChange={handleChange}
                        className="contact-form__input"
                    />
                </label>
                <label className="contact-form__label">
                    Coloque sua mensagem
                    <textarea 
                        name="message" 
                        onChange={handleChange}
                        className="contact-form__textarea"
                    ></textarea>
                </label>
                
                <button className="contact-form__button" type="submit">Enviar</button>
            </form>
        </section>
    )
}