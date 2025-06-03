import MainBox from "../../components/MainBox";
import Table from "../../components/Table";

export default function Page1() {

  const columns = [
    { key: 'company_id', label: 'ID' },
    { key: 'company_name', label: 'Razão Social' },
    { key: 'cnpj', label: 'CNPJ' },
    { key: 'address', label: 'Endereço' },
    { key: 'address_number', label: 'Número' },
    { key: 'address_code', label: 'CEP' },
  ];

  const companies = [
    {
      company_id: 1,
      company_name: 'Tech Solutions LTDA',
      cnpj: '12.345.678/0001-90',
      address: 'Rua das Flores',
      address_number: '123',
      address_code: '01234-567',
      created_at: new Date('2023-01-15T09:30:00'),
      updated_at: new Date('2023-12-01T14:20:00'),
    },
    {
      company_id: 2,
      company_name: 'Inova Comércio ME',
      cnpj: '98.765.432/0001-01',
      address: 'Avenida Paulista',
      address_number: '456',
      address_code: '04567-890',
      created_at: new Date('2022-05-10T11:45:00'),
      updated_at: new Date('2023-10-15T08:00:00'),
    },
    {
      company_id: 3,
      company_name: 'Alpha Engenharia EIRELI',
      cnpj: '11.222.333/0001-11',
      address: 'Rua dos Engenheiros',
      address_number: '789',
      address_code: '06789-123',
      created_at: new Date('2021-09-25T16:00:00'),
      updated_at: new Date('2023-06-20T10:15:00'),
    },
    {
      company_id: 4,
      company_name: 'Beta Consultoria Ltda',
      cnpj: '44.555.666/0001-22',
      address: 'Travessa das Acácias',
      address_number: '101',
      address_code: '07890-456',
      created_at: new Date('2023-03-01T13:30:00'),
      updated_at: new Date('2024-01-10T09:00:00'),
    },
    {
      company_id: 5,
      company_name: 'Gamma Indústria e Comércio',
      cnpj: '77.888.999/0001-33',
      address: 'Alameda dos Lírios',
      address_number: '202',
      address_code: '08901-789',
      created_at: new Date('2022-12-12T08:45:00'),
      updated_at: new Date('2024-05-05T17:20:00'),
    },
  ];

  const handleEdit = (row: object) => {
    console.log('Edit row:', row);
  }

  const handleDelete = (row: object) => {
    console.log('Delete row:', row);
  };

  return (
    <MainBox>
      <Table columns={columns} rows={companies} edit={handleEdit} del={handleDelete} />
    </MainBox>
  );
}