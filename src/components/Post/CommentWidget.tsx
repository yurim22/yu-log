import React, { createRef, FunctionComponent, useEffect} from 'react';

const src="https://utteranc.es/client.js";
const repo = 'yurim22/yurim22.github.io';

type UtterancesAttributesType = {
    src: string;
    repo: string;
    'issue-term': string;
    label: string;
    theme: string;
    crossorigin: string;
    async: string;
};

const CommentWidget: FunctionComponent = function() {
    const element= createRef<HTMLDivElement>();

    useEffect(() => {
        if(element.current === null) return;

        const utterances: HTMLScriptElement = document.createElement('script');

        const attribute: UtterancesAttributesType = {
            src,
            repo,
            'issue-term': 'title',
            label: 'Comment',
            theme: `github-light`,
            crossorigin: 'anonymous',
            async: 'true'
        };

        Object.entries(attribute).forEach(([key, value]) => {
            utterances.setAttribute(key, value);
        });

        element.current.appendChild(utterances);

    }, [])

    return <div ref={element} />
};

export default CommentWidget;