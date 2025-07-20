export interface JwtPayload {
  sub: number;
  email: string;
  role: string; // ✅ Add this line
}
