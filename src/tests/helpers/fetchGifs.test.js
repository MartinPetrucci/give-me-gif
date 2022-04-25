import React from "react";
import { fetchGiphyAPI } from "../../helpers/fetchGifs";

describe('Fetching GIFS helpers', () => {
    test('fetchGiphyAPI without paremeters',async () => {
        try {
            const response = await fetchGiphyAPI()
            console.log({response})
        } catch (error) {
            console.log(error)
        }
    })
    test('fetchGiphyAPI with search paremeter',async () => {
        try {
            const response = await fetchGiphyAPI({q: 'Hola'}, 'search')
            console.log({response})
        } catch (error) {
            console.log(error)
        }
    })
})