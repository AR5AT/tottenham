import { prisma } from '../../lib/db'
// Example: Get all products
const products = await prisma.product.findMany({
include: { category: true }
})