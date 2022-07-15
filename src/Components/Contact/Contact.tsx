import { useState } from 'react';
import { Input } from '../Input/Input';
import './Contact.scss';

export const Contact = () => {
  const [value, setValue] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [modale, setModale] = useState<boolean>(false);
  const handleChange = (e: any) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const seeModale = () => {
    setModale(true);
    setTimeout(() => setModale(false), 3000);
  };
  return (
    <section className='contact'>
      <h4 className='contact__title'>Contact me!</h4>
      <form
        className='contact__form'
        action=''
        onSubmit={(e) => {
          e.preventDefault();
          setValue({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
          seeModale();
        }}
      >
        <Input
          placeholder='Your name*'
          name='name'
          required={true}
          value={value.name}
          type={'text'}
          pattern={'[a-zA-Z]{3,30}'}
          handleChange={handleChange}
        />
        <Input
          placeholder='Your email*'
          type='email'
          name='email'
          value={value.email}
          handleChange={handleChange}
          required={true}
          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
        />
        <Input
          placeholder='Your subject*'
          type={'text'}
          value={value.subject}
          handleChange={handleChange}
          name='subject'
          required={true}
          pattern={'[a-zA-Z]{3,30}'}
        />
        <Input
          placeholder='Your message*'
          name='message'
          value={value.message}
          type={'textarea'}
          handleChange={handleChange}
          required={true}
          pattern={'[a-zA-Z]{3,150}'}
        />
        <button type='submit' className='button-contact button--disable'>
          Send
        </button>
      </form>
      <div className={`modale ${modale ? 'modale--see' : ''}`}>
        Message send !
      </div>
    </section>
  );
};
