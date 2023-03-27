import ConectarDb from "@/lib/dbConnect"
import Producto from "@/models/Producto"

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
