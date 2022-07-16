import { ChangeEvent, useState } from 'react';
import { useControlled } from '../../Hooks/useControlled';
import { Input } from '../Input/Input';
import './Contact.scss';

export const Contact = () => {
  const [value, resetValue, handleChange] = useControlled({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  /**
   * Allow to show the validation modal. After 3 seconds, the modal disapears
   */
  const [modale, setModale] = useState<boolean>(false);
  const seeModale = () => {
    setModale(true);
    setTimeout(() => setModale(false), 3000);
  };
  return (
    <section className="contact">
      <h3 className="contact__title">Contact me!</h3>
      <form
        className="contact__form"
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          resetValue();
          seeModale();
        }}
      >
        <Input
          placeholder="Your name*"
          name="name"
          required={true}
          value={value.name}
          type={'text'}
          pattern={'[a-zA-Z]{3,30}'}
          handleChange={handleChange}
          arialabel={'name of the contact page'}
        />
        <Input
          placeholder="Your email*"
          type="email"
          name="email"
          value={value.email}
          handleChange={handleChange}
          required={true}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          arialabel={'email of the contact page'}
        />
        <Input
          placeholder="Your subject*"
          type={'text'}
          value={value.subject}
          handleChange={handleChange}
          name="subject"
          required={true}
          pattern={'[a-zA-Z]{3,30}'}
          arialabel={'subject of the contact page'}
        />
        <textarea
          className="textarea"
          name="message"
          placeholder="Your message*"
          value={value.message}
          cols={30}
          rows={10}
          required
          aria-label="message of the contact page"
          onChange={() => handleChange}
        />
        <button type="submit" className="button-contact button--disable">
          Send
        </button>
      </form>
      <p className={`modale ${modale ? 'modale--see' : ''}`}>Message send !</p>
    </section>
  );
};
