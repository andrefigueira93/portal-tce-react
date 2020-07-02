export default interface RouteLinkDTO {
  rota: string;
  nome: string;
  child: RouteLinkDTO[] | null;
}
