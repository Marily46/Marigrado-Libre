import { Product } from "@/types";

export function Products({products}: { products : Product[] }) {
    return (
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
        {products.map(({ id, thumbnail, title, currency_id: currencyId, price, permalink }) => (
          <li key={id}>
            <a 
                href={permalink} 
                title="Ir a la pagina de Mercado Libre para el producto ${title}" 
                target='_blank' 
                rel="noopener noreferrer"
            >
                <img src={thumbnail} alt={title}></img>
                <h3>{title}</h3>
                <strong>{price.toLocaleString('es-AR', {
                    currency: currencyId,
                    style: "currency",
                })}
                </strong>
            </a>
          </li>
        ))
        }
      </ul>
    )
  }
  