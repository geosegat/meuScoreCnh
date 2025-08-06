import { Fine } from '../types/fines';
import { User, UserCredentials } from '../types/user';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const usersData: User[] = [
  {
    id: "1",
    name: "João Silva Santos",
    cpf: "123.456.789-00",
    cnh: "12345678901",
    category: "B",
    validityDate: "15/08/2027",
    email: "joao.silva@email.com",
    phone: "(11) 99999-9999",
    currentPoints: 32,
    maxPoints: 40
  },
  {
    id: "2", 
    name: "Maria Oliveira Costa",
    cpf: "987.654.321-11",
    cnh: "98765432109",
    category: "AB",
    validityDate: "20/12/2026",
    email: "maria.oliveira@email.com",
    phone: "(11) 88888-8888",
    currentPoints: 0,
    maxPoints: 40
  },
  {
    id: "3",
    name: "Carlos Roberto Lima", 
    cpf: "456.789.123-22",
    cnh: "45678912345",
    category: "B",
    validityDate: "10/05/2025",
    email: "carlos.lima@email.com",
    phone: "(11) 77777-7777",
    currentPoints: 19,
    maxPoints: 40
  },
  {
    id: "4",
    name: "Ana Paula Ferreira",
    cpf: "321.654.987-33", 
    cnh: "32165498765",
    category: "B",
    validityDate: "03/09/2028",
    email: "ana.ferreira@email.com",
    phone: "(11) 66666-6666",
    currentPoints: 7,
    maxPoints: 40
  },
  {
    id: "5",
    name: "Roberto Almeida Santos",
    cpf: "789.123.456-44",
    cnh: "78912345678",
    category: "C",
    validityDate: "25/11/2024",
    email: "roberto.almeida@email.com", 
    phone: "(11) 55555-5555",
    currentPoints: 14,
    maxPoints: 40
  }
];

export const userCredentials: UserCredentials[] = [
  { cpf: "123.456.789-00", password: "1234" },
  { cpf: "987.654.321-11", password: "1234" },
  { cpf: "456.789.123-22", password: "1234" },
  { cpf: "321.654.987-33", password: "1234" },
  { cpf: "789.123.456-44", password: "1234" }
];

export const finesDataHardcoded: Fine[] = [
  {
    "id": "#75420-1",
    "type": "Excesso de velocidade",
    "date": "04/08/2025 - 14:20",
    "location": "Av. Paulista, 1500 - Bela Vista, São Paulo - SP",
    "licensePlate": "ABC-1234",
    "amount": "195,23",
    "points": 5,
    "status": "pending",
    "dueDate": "04/09/2025",
    "description": "Velocidade registrada: 85 km/h em via de 60 km/h. Você excedeu o limite de velocidade em 41,7%.",
    "article": "Art. 218, II do CTB",
    "speedLimit": 60,
    "recordedSpeed": 85,
    "excessSpeed": 25,
    "excessPercentage": 41.7,
    "officer": "Agente 12345",
    "equipment": "Radar fixo - Equipamento 001",
    "userCpf": "123.456.789-00"
  },
  {
    "id": "#75419-5",
    "type": "Excesso de velocidade",
    "date": "03/08/2025 - 09:15",
    "location": "Av. Faria Lima, 2500 - Itaim Bibi, São Paulo - SP",
    "licensePlate": "ABC-1234",
    "amount": "293,47",
    "points": 7,
    "status": "pending",
    "dueDate": "03/09/2025",
    "description": "Velocidade registrada: 75 km/h em via de 50 km/h. Você excedeu o limite de velocidade em 50%.",
    "article": "Art. 218, III do CTB",
    "speedLimit": 50,
    "recordedSpeed": 75,
    "excessSpeed": 25,
    "excessPercentage": 50,
    "officer": "Agente 23456",
    "equipment": "Radar móvel - Equipamento 002",
    "userCpf": "123.456.789-00"
  },
  {
    "id": "#75418-3",
    "type": "Excesso de velocidade",
    "date": "01/08/2025 - 16:30",
    "location": "Rua Augusta, São Paulo - SP",
    "licensePlate": "ABC-1234",
    "amount": "88,38",
    "points": 2,
    "status": "paid",
    "dueDate": "01/09/2025",
    "description": "Velocidade registrada: 68 km/h em via de 60 km/h. Você excedeu o limite de velocidade em 13,3%.",
    "article": "Art. 218, I do CTB",
    "speedLimit": 60,
    "recordedSpeed": 68,
    "excessSpeed": 8,
    "excessPercentage": 13.3,
    "officer": "Agente 34567",
    "equipment": "Radar portátil - Equipamento 003",
    "userCpf": "123.456.789-00"
  },
  {
    "id": "#75414-4",
    "type": "Não utilização do cinto de segurança",
    "date": "15/07/2025 - 13:10",
    "location": "Av. São João, Centro, São Paulo - SP",
    "licensePlate": "ABC-1234",
    "amount": "195,23",
    "points": 5,
    "status": "pending",
    "dueDate": "15/08/2025",
    "description": "Conduzir veículo sem usar o cinto de segurança, conforme estabelecido no Código de Trânsito.",
    "article": "Art. 167, § único do CTB",
    "speedLimit": 60,
    "recordedSpeed": 60,
    "excessSpeed": 0,
    "excessPercentage": 0,
    "officer": "Agente 78901",
    "equipment": "Fiscalização eletrônica - Câmera 007",
    "userCpf": "123.456.789-00"
  },
  {
    "id": "#75412-8",
    "type": "Desrespeito à sinalização",
    "date": "05/07/2025 - 15:45",
    "location": "Av. Consolação, São Paulo - SP",
    "licensePlate": "ABC-1234",
    "amount": "195,23",
    "points": 2,
    "status": "paid",
    "dueDate": "05/08/2025",
    "description": "Desrespeitar a sinalização de trânsito regulamentar.",
    "article": "Art. 208 do CTB",
    "speedLimit": 50,
    "recordedSpeed": 50,
    "excessSpeed": 0,
    "excessPercentage": 0,
    "officer": "Agente 90123",
    "equipment": "Registro fotográfico - Equipamento 009",
    "userCpf": "123.456.789-00"
  },

  // Carlos Roberto Lima (CPF: 456.789.123-22) - Usuário com algumas multas pagas 
  {
    "id": "#75417-7",
    "type": "Excesso de velocidade",
    "date": "28/07/2025 - 11:45",
    "location": "Av. Rebouças, São Paulo - SP",
    "licensePlate": "KPB-0232",
    "amount": "293,47",
    "points": 7,
    "status": "paid",
    "dueDate": "28/08/2025",
    "description": "Velocidade registrada: 110 km/h em via de 80 km/h. Você excedeu o limite de velocidade em 37,5%.",
    "article": "Art. 218, II do CTB",
    "speedLimit": 80,
    "recordedSpeed": 110,
    "excessSpeed": 30,
    "excessPercentage": 37.5,
    "officer": "Agente 45678",
    "equipment": "Radar fixo - Equipamento 004",
    "userCpf": "456.789.123-22"
  },
  {
    "id": "#75413-1",
    "type": "Não guardar distância",
    "date": "10/07/2025 - 10:30",
    "location": "Rod. Anhanguera, São Paulo - SP",
    "licensePlate": "KPB-0232",
    "amount": "130,16",
    "points": 4,
    "status": "paid",
    "dueDate": "10/08/2025",
    "description": "Deixar de guardar distância de segurança lateral e frontal entre o seu veículo e os demais.",
    "article": "Art. 192 do CTB",
    "speedLimit": 80,
    "recordedSpeed": 80,
    "excessSpeed": 0,
    "excessPercentage": 0,
    "officer": "Agente 89012",
    "equipment": "Registro fotográfico - Equipamento 008",
    "userCpf": "456.789.123-22"
  },
  {
    "id": "#75410-3",
    "type": "Dirigir sem cinto de segurança",
    "date": "25/06/2025 - 18:15",
    "location": "Av. Marginal Tietê, São Paulo - SP",
    "licensePlate": "KPB-0232",
    "amount": "195,23",
    "points": 5,
    "status": "paid",
    "dueDate": "25/07/2025",
    "description": "Deixar de usar o cinto de segurança.",
    "article": "Art. 167 do CTB",
    "speedLimit": 80,
    "recordedSpeed": 80,
    "excessSpeed": 0,
    "excessPercentage": 0,
    "officer": "Agente 22334",
    "equipment": "Registro fotográfico - Equipamento 011",
    "userCpf": "456.789.123-22"
  },

  // Ana Paula Ferreira (CPF: 321.654.987-33) - Usuária com poucas multas, todas pagas
  {
    "id": "#75416-2",
    "type": "Excesso de velocidade",
    "date": "25/07/2025 - 08:00",
    "location": "Rua Oscar Freire, São Paulo - SP",
    "licensePlate": "DEF-5432",
    "amount": "130,16",
    "points": 4,
    "status": "paid",
    "dueDate": "25/08/2025",
    "description": "Velocidade registrada: 57 km/h em via de 40 km/h. Você excedeu o limite de velocidade em 42,5%.",
    "article": "Art. 218, II do CTB",
    "speedLimit": 40,
    "recordedSpeed": 57,
    "excessSpeed": 17,
    "excessPercentage": 42.5,
    "officer": "Agente 56789",
    "equipment": "Radar portátil - Equipamento 005",
    "userCpf": "321.654.987-33"
  },
  {
    "id": "#75415-9",
    "type": "Excesso de velocidade",
    "date": "20/07/2025 - 17:20",
    "location": "Av. Ibirapuera, São Paulo - SP",
    "licensePlate": "DEF-5432",
    "amount": "130,16",
    "points": 2,
    "status": "paid",
    "dueDate": "20/08/2025",
    "description": "Velocidade registrada: 45 km/h em via de 40 km/h. Você excedeu o limite de velocidade em 12,5%.",
    "article": "Art. 218, I do CTB",
    "speedLimit": 40,
    "recordedSpeed": 45,
    "excessSpeed": 5,
    "excessPercentage": 12.5,
    "officer": "Agente 67890",
    "equipment": "Radar portátil - Equipamento 006",
    "userCpf": "321.654.987-33"
  },

  // Roberto Almeida Santos (CPF: 789.123.456-44) - Usuário com multas vencidas
  {
    "id": "#75411-6",
    "type": "Estacionar em local proibido",
    "date": "01/07/2025 - 12:00",
    "location": "Rua da Consolação, São Paulo - SP",
    "licensePlate": "XYZ-9876",
    "amount": "88,38",
    "points": 2,
    "status": "overdue",
    "dueDate": "01/08/2025",
    "description": "Estacionar em local proibido pela sinalização.",
    "article": "Art. 181, XVIII do CTB",
    "speedLimit": 40,
    "recordedSpeed": 40,
    "excessSpeed": 0,
    "excessPercentage": 0,
    "officer": "Agente 11223",
    "equipment": "Registro fotográfico - Equipamento 010",
    "userCpf": "789.123.456-44"
  },
  {
    "id": "#75409-8",
    "type": "Ultrapassagem proibida",
    "date": "20/06/2025 - 07:30",
    "location": "Av. 23 de Maio, São Paulo - SP",
    "licensePlate": "XYZ-9876",
    "amount": "293,47",
    "points": 7,
    "status": "overdue",
    "dueDate": "20/07/2025",
    "description": "Efetuar ultrapassagem em local proibido pela sinalização.",
    "article": "Art. 203 do CTB",
    "speedLimit": 60,
    "recordedSpeed": 60,
    "excessSpeed": 0,
    "excessPercentage": 0,
    "officer": "Agente 33445",
    "equipment": "Registro fotográfico - Equipamento 012",
    "userCpf": "789.123.456-44"
  },
  {
    "id": "#75408-5",
    "type": "Estacionamento em vaga de deficiente",
    "date": "15/06/2025 - 14:45",
    "location": "Shopping Iguatemi, São Paulo - SP",
    "licensePlate": "XYZ-9876",
    "amount": "293,47",
    "points": 7,
    "status": "overdue",
    "dueDate": "15/07/2025",
    "description": "Estacionar veículo em vaga reservada à pessoa com deficiência sem credencial que comprove tal condição.",
    "article": "Art. 181, XVII do CTB",
    "speedLimit": 20,
    "recordedSpeed": 20,
    "excessSpeed": 0,
    "excessPercentage": 0,
    "officer": "Agente 44556",
    "equipment": "Registro fotográfico - Equipamento 013",
    "userCpf": "789.123.456-44"
  },
  {
    "id": "#75407-2",
    "type": "Não usar equipamento obrigatório",
    "date": "10/06/2025 - 19:00",
    "location": "Av. Ipiranga, São Paulo - SP",
    "licensePlate": "XYZ-9876",
    "amount": "88,38",
    "points": 3,
    "status": "pending",
    "dueDate": "10/07/2025",
    "description": "Deixar de usar o equipamento obrigatório no veículo.",
    "article": "Art. 230, IX do CTB",
    "speedLimit": 50,
    "recordedSpeed": 50,
    "excessSpeed": 0,
    "excessPercentage": 0,
    "officer": "Agente 55667",
    "equipment": "Registro fotográfico - Equipamento 014",
    "userCpf": "789.123.456-44"
  },
  {
    "id": "#75406-9",
    "type": "Transitar na contramão",
    "date": "05/06/2025 - 06:20",
    "location": "Rua da Liberdade, São Paulo - SP",
    "licensePlate": "XYZ-9876",
    "amount": "293,47",
    "points": 7,
    "status": "paid",
    "dueDate": "05/07/2025",
    "description": "Transitar com o veículo na contramão de direção.",
    "article": "Art. 186, II do CTB",
    "speedLimit": 40,
    "recordedSpeed": 40,
    "excessSpeed": 0,
    "excessPercentage": 0,
    "officer": "Agente 66778",
    "equipment": "Registro fotográfico - Equipamento 015",
    "userCpf": "789.123.456-44"
  },

  // Maria Oliveira Costa (CPF: 987.654.321-11) não tem multas - usuária exemplar
];

// Usuário atualmente logado (inicialmente João)
let currentUser: User | null = usersData[0];

export const finesData = finesDataHardcoded;

export const getFinesData = (): Fine[] => {
  return finesDataHardcoded;
};

// Funções de autenticação e gestão de usuários
export const authenticateUser = (cpf: string, password: string): User | null => {
  const credentials = userCredentials.find(cred => cred.cpf === cpf && cred.password === password);
  if (credentials) {
    const user = usersData.find(u => u.cpf === cpf);
    if (user) {
      currentUser = user;
      return user;
    }
  }
  return null;
};

export const getCurrentUser = (): User | null => {
  return currentUser;
};

export const setCurrentUser = (user: User | null): void => {
  currentUser = user;
};

export const logout = (): void => {
  currentUser = null;
};

// Função para obter multas do usuário atual
export const getCurrentUserFines = (): Fine[] => {
  if (!currentUser) return [];
  return finesDataHardcoded.filter(fine => fine.userCpf === currentUser!.cpf);
};

// Função para obter multas de um usuário específico
export const getUserFines = (cpf: string): Fine[] => {
  return finesDataHardcoded.filter(fine => fine.userCpf === cpf);
};

// Funções auxiliares para calcular estatísticas do usuário atual
export const calculateTotalPoints = (): number => {
  const fines = getCurrentUserFines();
  return fines.reduce((total, fine) => total + (fine.points || 0), 0);
};

export const calculatePendingFinesTotal = (): number => {
  const fines = getCurrentUserFines();
  const pendingFines = fines.filter(fine => fine.status === 'pending');
  return pendingFines.reduce((total, fine) => {
    return total + parseFloat(fine.amount.replace(',', '.'));
  }, 0);
};

export const calculatePaidFinesTotal = (): number => {
  const fines = getCurrentUserFines();
  const paidFines = fines.filter(fine => fine.status === 'paid');
  return paidFines.reduce((total, fine) => {
    return total + parseFloat(fine.amount.replace(',', '.'));
  }, 0);
};

export const getFinesByStatus = (status: 'pending' | 'paid' | 'overdue'): Fine[] => {
  const fines = getCurrentUserFines();
  return fines.filter(fine => fine.status === status);
};

export const getRecentFines = (limit: number = 3): Fine[] => {
  const fines = getCurrentUserFines();
  return fines.slice(0, limit);
};

// Funções para gerenciar fotos de perfil por usuário
export const saveUserProfileImage = async (userId: string, imageUri: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(`profile_image_${userId}`, imageUri);
  } catch (error) {
    console.log('Erro ao salvar imagem do usuário:', error);
  }
};

export const getUserProfileImage = async (userId: string): Promise<string | null> => {
  try {
    const savedImage = await AsyncStorage.getItem(`profile_image_${userId}`);
    return savedImage;
  } catch (error) {
    console.log('Erro ao carregar imagem do usuário:', error);
    return null;
  }
};

export const getAllUserProfileImages = async (): Promise<{ [userId: string]: string }> => {
  try {
    const userImages: { [userId: string]: string } = {};
    
    for (const user of usersData) {
      const image = await getUserProfileImage(user.id);
      if (image) {
        userImages[user.id] = image;
      }
    }
    
    return userImages;
  } catch (error) {
    console.log('Erro ao carregar todas as imagens:', error);
    return {};
  }
};

export const removeUserProfileImage = async (userId: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(`profile_image_${userId}`);
  } catch (error) {
    console.log('Erro ao remover imagem do usuário:', error);
  }
};
