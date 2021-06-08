export default function handler(req, res) {
  res.status(200).json({
    name: "John Doe"
  });
}

/**
 * id = year-month-day-hash
 *
 * POST
 * - newRegister(year, month, day, time)
 *
 * DELETE
 * - deleteRegister(id)
 *
 * GET
 * - getRegisters(year, month)
 *
 * PATCH
 * - updateRegister(id, time)
 */
