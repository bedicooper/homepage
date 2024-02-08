import {
    Description,
    Link,
    Links,
    LinksRow,
    LinksValue,
    List,
    Name,
    Tile
} from "./styled";

export const Repositories = ({ repositories }) => (
    <article>
        <List>
            {repositories.map(({ id, name, description, html_url }) => (
                <Tile key={id}>
                    <Name>{name}</Name>
                    <Description>{description}</Description>
                    <Links>
                        <LinksRow>
                            <dt>Demo:</dt>
                            <LinksValue>
                                <Link
                                    href={`https://bedicooper.github.io/${name}/`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {`https://bedicooper.github.io/${name}/`}
                                </Link>
                            </LinksValue>
                        </LinksRow>
                        <LinksRow>
                            <dt>Code:</dt>
                            <LinksValue>
                                <Link
                                    href={html_url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {html_url}
                                </Link>
                            </LinksValue>
                        </LinksRow>
                    </Links>
                </Tile>
            ))}
        </List>
    </article>
);