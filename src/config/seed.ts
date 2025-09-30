import { prisma } from "config/client"
import { hashPassword } from "services/auth.service";

const initDatabase = async () => {
  const countUser = await prisma.user.count();
  const countRestaurant = await prisma.restaurant.count();
  const countMenu = await prisma.menu.count();
  const countMenuItem = await prisma.menuItem.count();
  const countItemOption = await prisma.itemOption.count();
  const countOptionValue = await prisma.optionValue.count();
  const countDrone = await prisma.drone.count();

  // USERS
  if (countUser === 0) {
    const pwd = await hashPassword("123456");
    await prisma.user.createMany({
      data: [
        {
          name: "admin",
          passwordHash: pwd,
          email: "admin@gmail.com",
          role: "ADMIN",
          phone: "0123456789",
          status: "ACTIVE"
        },
        {
          name: "test1",
          passwordHash: pwd,
          email: "test1@gmail.com",
          role: "CUSTOMER",
          phone: "0123456589",
          status: "ACTIVE"
        },
        {
          name: "test2",
          passwordHash: pwd,
          email: "test2@gmail.com",
          role: "CUSTOMER",
          phone: "0122256589",
          status: "ACTIVE"
        }
      ]
    })
  }

  // RESTAURANTS
  if (countRestaurant === 0) {
    await prisma.restaurant.createMany({
      data: [
        {
          ownerUserId: 1,
          name: "Pizza House",
          address: "123 Nguyễn Huệ, Q1, HCM",
          latitude: 10.776889,
          longitude: 106.700806,
          isOpen: true,
          vnpayId: "vnpay_001"
        },
        {
          ownerUserId: 2,
          name: "Sushi World",
          address: "45 Lê Lợi, Q1, HCM",
          latitude: 10.776500,
          longitude: 106.701000,
          isOpen: true,
          vnpayId: "vnpay_002"
        },
        {
          ownerUserId: 3,
          name: "Bánh Mì Express",
          address: "78 Hai Bà Trưng, Q3, HCM",
          latitude: 10.784000,
          longitude: 106.695500,
          isOpen: false,
          vnpayId: "vnpay_003"
        }
      ]
    })
  }

  // MENUS
  if (countMenu === 0) {
    await prisma.menu.createMany({
      data: [
        { restaurantId: 1, name: "Pizza Menu", isActive: true },
        { restaurantId: 2, name: "Sushi Menu", isActive: true },
        { restaurantId: 3, name: "Bánh Mì Menu", isActive: true }
      ]
    })
  }

  // MENU ITEMS
  if (countMenuItem === 0) {
    await prisma.menuItem.createMany({
      data: [
        { menuId: 1, name: "Pizza Margherita", basePrice: 120000, isActive: true },
        { menuId: 1, name: "Pizza Pepperoni", basePrice: 150000, isActive: true },
        { menuId: 2, name: "Sushi Combo A", basePrice: 200000, isActive: true }
      ]
    })
  }

  // ITEM OPTIONS
  if (countItemOption === 0) {
    await prisma.itemOption.createMany({
      data: [
        { itemId: 1, name: "Size", type: "single", isRequired: true },
        { itemId: 2, name: "Topping", type: "multi", isRequired: false },
        { itemId: 3, name: "Soy Sauce", type: "single", isRequired: false }
      ]
    })
  }

  // OPTION VALUES
  if (countOptionValue === 0) {
    await prisma.optionValue.createMany({
      data: [
        { optionId: 1, label: "Size M", addPrice: 0 },
        { optionId: 1, label: "Size L", addPrice: 30000 },
        { optionId: 2, label: "Thêm Phô Mai", addPrice: 20000 }
      ]
    })
  }

  // DRONES
  if (countDrone === 0) {
    await prisma.drone.createMany({
      data: [
        { name: "Drone A", batteryPct: 90, status: "FREE" },
        { name: "Drone B", batteryPct: 60, status: "BUSY" },
        { name: "Drone C", batteryPct: 100, status: "FREE" },
        { name: "Drone D", batteryPct: 45, status: "BUSY" },
        { name: "Drone E", batteryPct: 75, status: "FREE" },
        { name: "Drone F", batteryPct: 20, status: "BUSY" },
        { name: "Drone G", batteryPct: 50, status: "FREE" },
        { name: "Drone H", batteryPct: 10, status: "BUSY" }
      ]
    })
  }

  console.log(">>> INIT DATA DONE <<<")
}

export default initDatabase
