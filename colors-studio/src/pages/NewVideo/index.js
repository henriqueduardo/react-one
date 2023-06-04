import React from 'react';
import { HiChevronDoubleLeft } from "react-icons/hi";
import InputText from '../../components/FormInputText';
import TextareaDescription from '../../components/FormInputDesc';
import { Link } from 'react-router-dom';
import ButtonNewVideo from '../../components/ButtonNewVideo';

const NewVideo = () => {
  return (
    <>
        <section className='bg-primary-2 h-auto w-full'>

            <div className='container flex flex-row justify-between items-center new-video'>

                <h2 className='text-6xl font-semibold text-white'>Novo <span className='color-primary'>*</span> vídeo</h2>

                <Link to="/">
                    <HiChevronDoubleLeft className='color-primary text-6xl'/>
                </Link>
                
            </div>

            <form className='container flex flex-col gap-10'>

                <InputText 
                label="Título" 
                placeholder="Escolha o título do vídeo"
                type="text"/>

                <InputText 
                label="Link" 
                placeholder="Insira o link do vídeo, por ex: https://youtu.be/sALoJ9F-xDM"
                type="text"/>

                <InputText 
                label="Imagem" 
                placeholder="Insira o link da thumbnail do vídeo ou qualquer outra imagem png, jpg..."
                type="text"/>

                <TextareaDescription
                label="Descrição"
                placeholder="Digite a descrição do vídeo"/>

            </form>

            <div className='container flex flex-row gap-10'>

                <ButtonNewVideo
                text="Adicionar"
                type="submit"
                className="text-white w-44 h-14 text-center text-lg cursor-pointer rounded bg-highlight mb-40 transition-all hover:bg-orange-500"/>

                <ButtonNewVideo
                text="Limpar"
                type="reset"
                className="text-white w-44 h-14 text-center text-lg cursor-pointer rounded transition-all bg-zinc-500 mb-40 hover:bg-zinc-400"/>
            </div>

        </section>
    </>
  )
}

export default NewVideo;