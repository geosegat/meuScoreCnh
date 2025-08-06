export const getStatusColor = (status: string): string => {
  switch (status) {
    case 'pending':
      return '#FEF3C7'
    case 'paid':
      return '#D1FAE5'
    case 'overdue':
      return '#FEE2E2'
    default:
      return '#F3F4F6'
  }
}

export const getStatusTextColor = (status: string): string => {
  switch (status) {
    case 'pending':
      return '#92400E'
    case 'paid':
      return '#065F46'
    case 'overdue':
      return '#991B1B'
    default:
      return '#374151'
  }
}

export const getStatusText = (status: string): string => {
  switch (status) {
    case 'pending':
      return 'Pendente'
    case 'paid':
      return 'Paga'
    case 'overdue':
      return 'Vencida'
    default:
      return 'Desconhecido'
  }
}
