import Image from 'next/image';

const ClientList = () => {
  const clients = [
    { src: 'clients/1.svg', alt: 'Client 1' },
    { src: 'clients/2.svg', alt: 'Client 2' },
    { src: 'clients/3.svg', alt: 'Client 3' },
    { src: 'clients/4.svg', alt: 'Client 4' },
    { src: 'clients/5.svg', alt: 'Client 5' },
  ];

  return (
    <div className="client-list-container bg-transparent p-2 border border-gray mt-auto mb-6 rounded-xl">
      <ul className="clients bg-lightBlack flex items-center gap-6 rounded-xl">
        {clients.map((client, index) => (
          <li className="client" key={index}>
            <Image
              className=""
              src={client.src}
              alt={client.alt}
              width={150}
              height={150}
              priority
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientList;
