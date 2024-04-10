"use client";
import { useState } from "react";
import { Category } from "@/types";
import Link from "next/link";

function CategoryItem ({
    category,
    categories
}: {
    category: Category;
    categories: Category[];
}) {
    const [expanded, setExpanded] = useState(false);
    const handleClick = () => setExpanded((value) => !value);

    const hasSubCategories = categories.filter(({parentId}) =>
        category.id === parentId).length;

    return (
        <li key={category.id} className="ml-4">
            {
                hasSubCategories ? (
                    <button
                        className="mr-1 text-white"
                        type="button"
                        onClick={handleClick}
                    >
                        { expanded ? "-" : "+" }
                    </button>
                ) : null
            } 
       <Link href={`${category.id}`}>{category.name}</Link>
       {expanded ? (
            <ListOfCategories categories={categories} parentCategory={category.id} />
        ) : null 
       }
     </li>
    )
}

export function ListOfCategories ({
    categories, 
    parentCategory = null,
   }: { 
     categories: Category[];
     parentCategory?: string | null
    }) {

        const categoriesToRender = categories.filter(({parentId}) => {return parentCategory === parentId})


     return (
     <ul>
       {categoriesToRender.map((category) => (
        <CategoryItem
            key={category.id}
            categories={categories}
            category={category}
        />
       ))}
     </ul>)
 }
 