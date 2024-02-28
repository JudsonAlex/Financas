export default function formatNumber(valor: number): string {
    return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
}