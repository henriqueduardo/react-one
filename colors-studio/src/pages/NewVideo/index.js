import React, { useState } from 'react';
import { HiChevronDoubleLeft } from "react-icons/hi";
import InputText from '../../components/FormInputText';
import TextareaDescription from '../../components/FormInputDesc';
import { Link, useNavigate } from 'react-router-dom';
import ButtonNewVideo from '../../components/ButtonNewVideo';
import InputSelect from '../../components/FormInputCategories';

const NewVideo = () => {
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [image, setImage] = useState('');
    const [categoryVideo, setCategoryVideo] = useState('');
    const [description, setDescription] = useState('');

    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const video = { title, link, image, categoryVideo, description };
      fetch('http://localhost:3002/videos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(video),
      })
        .then(() => {
          setTitle('');
          setLink('');
          setImage('');
          setCategoryVideo('');
          setDescription('');
        })
        .catch((error) => console.error(error));
        navigate("/");
    };
  
    return (
      <>
        <section className='bg-primary-2 h-auto w-full'>
          <div className='container flex flex-row justify-between items-center new-video'>
            <h2 className='text-6xl font-semibold text-white title-newvideo'>
              Novo <span className='color-primary'>*</span> vídeo
            </h2>
            <Link to='/'>
              <HiChevronDoubleLeft className='color-primary text-6xl' />
            </Link>
          </div>
          <form className='container flex flex-col gap-10' onSubmit={handleSubmit}>
            <InputText
              label='Título'
              placeholder='Escolha o título do vídeo'
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <InputText
              label='Link'
              placeholder='Insira o link do vídeo, por ex: https://youtu.be/sALoJ9F-xDM'
              type='text'
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            <InputText
              label='Imagem'
              placeholder='Insira o link da thumbnail do vídeo ou qualquer outra imagem png, jpg...'
              type='text'
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <InputSelect
              label='Escolha a categoria'
              value={categoryVideo}
              onChange={(e) => setCategoryVideo(e.target.value)}
            />
            <TextareaDescription
              label='Descrição'
              placeholder='Digite a descrição do vídeo'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className='flex flex-row gap-10'>
              <ButtonNewVideo
                text='Adicionar'
                type='submit'
                className='text-white w-44 h-14 text-center text-lg cursor-pointer rounded bg-highlight mb-40 transition-all hover:bg-orange-500'
              />
              <ButtonNewVideo
                text='Limpar'
                type='reset'
                className='text-white w-44 h-14 text-center text-lg cursor-pointer rounded transition-all bg-zinc-500 mb-40 hover:bg-zinc-400'
              />
            </div>
          </form>
        </section>
      </>
    );
};

export default NewVideo;