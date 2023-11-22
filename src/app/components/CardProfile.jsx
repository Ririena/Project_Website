
import React from 'react';
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Skeleton, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from '@nextui-org/react';
import { useState, useEffect} from 'react'

const CardProfile = ({ user }) => {
  
  const [bukaModal , setBukaModal] = useState(false)

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <div className="bg-gradient-to-tl from-amber-100 via-amber-200 to-amber-300 p-6 rounded-lg overflow-hidden shadow-lg">
      <div data-aos="fade-right" className="">
        {user ? (
          <Image
            src={`/profile/${user.avatar}`}
            alt={user.name}
            className="rounded-full mx-auto"
            width={80}
            height={80}
            style={{ objectPosition: 'center center' }}
          />
        ) : (
          <Skeleton circle height={80} width={80} />
        )}
        <div data-aos="fade-up"></div>
        {user ? (
          <>
            <h2 className="text-xl font-semibold text-gray-800">{user.name || 'Nama Tidak Ditemukan'}</h2>
            <p className="text-gray-600">Motto Hidup: {user.email || 'Tidak Memiliki Motto  Hidup'}</p>
            <Button onPress={onOpen} className='mt-4 border px-4 py-2 rounded-lg border-amber-500 text-amber-500 hover:text-purple-600 hover:border-purple-600 hover:bg-amber-200'>Detail</Button>
  <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
    <ModalContent>
      {(onClose) => (
        <>
        <ModalHeader className='bg-purple-600 text-white'>
          Detail Pengguna
        </ModalHeader>
        <ModalBody className='bg-slate-400 shadow-md w-full'>
          <Image
            src={`/profile/${user.avatar}`}
            alt={user.name}
            className="rounded-full mx-auto"
            width={120}
            height={120}
            style={{ objectPosition: 'center center' }}
          />
          <h2 className="text-xl font-semibold text-gray-800">{user.name || 'Nama Tidak Ditemukan'}</h2>
          <p className="text-white">Motto Hidup: {user.email || 'Tidak Memiliki Motto Hidup'}</p>
          <p className="text-white">Jenis Kelamin: {user.gender ? 'Laki-Laki' : 'Perempuan'}</p>
          <p className="text-white">Alamat: {user.address || 'Alamat Tidak Ditemukan'}</p>
        </ModalBody>
        <ModalFooter className='bg-purple-600'>
          <Button  className='text-white font-semibold' onPress={() => { onClose(); setBukaModal(false); }}>Tutup</Button>
        </ModalFooter>
        </>
      )}
    </ModalContent>
  </Modal>
          </>
        ) : (
          <>
            <Skeleton height={20} width={120} />
            <Skeleton height={15} width={100} />
            <Skeleton height={35} width={120} />
          </>
        )}
      </div>
    </div>
</>
  );
};

export default CardProfile;
