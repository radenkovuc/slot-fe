export const getSlotSequences = async (): Promise<number[]> => {
    const response = await fetch("https://slot-be.vercel.app/slot-array")
    return await response.json()
}