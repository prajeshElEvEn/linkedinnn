import { FiberManualRecord, Info } from '@mui/icons-material'
import React from 'react'

const Widgets = () => {
    const newsArticles = (heading, subtitle) => (
        <div className="widgets-article">
            <div className="widgets-article-left">
                <FiberManualRecord />
            </div>
            <div className="widgets-article-right">
                <div className="article-heading">
                    {heading}
                </div>
                <div className="article-subtitle">
                    {subtitle}
                </div>
            </div>
        </div>
    )
    return (
        <div className='widgets'>
            <div className="widgets-header">
                <span className="widgets-heading">
                    LinkedIn News
                </span>
                <Info className='widgets-icon' />
            </div>
            {newsArticles("React is back", "Top news - 9099 readers")}
            {newsArticles("Coronavirus: UK updates", "Top news - 886 readers")}
            {newsArticles("Tesla hits new highs", "Cars & auto - 300 readers")}
            {newsArticles("Bitcoin Breaks $22k", "Crypto - 8000 readers")}
            {newsArticles("Is Redux too good?", "Code - 123 readers")}
        </div>
    )
}

export default Widgets
