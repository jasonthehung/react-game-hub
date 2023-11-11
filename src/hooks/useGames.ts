import { useEffect, useState } from "react"
import apiClients from "../services/api-clients"
import { CanceledError } from "axios"

interface FetchGamesResponse {
    count: number
    results: Game[]
}

export interface Platform {
    id: number
    name: string
    slug: string
}

export interface Game {
    id: number
    name: string
    background_image: string
    parent_platforms: { platform: Platform }[]
    metacritic: number
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController()

        setIsLoading(true)
        apiClients
            .get<FetchGamesResponse>("/games", { signal: controller.signal })
            .then((res) => {
                setGames(res.data.results)
                setIsLoading(false)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return
                setError(err.message)
                setIsLoading(false)
            })

        return () => {
            controller.abort()
        }
    }, [])

    return { games, error, isLoading }
}

export default useGames
