interface Props {
    headers: string[]
}

const TableHeader = ({ headers }: Props) => (
    <thead>
        <tr>
            {
                headers.map((header, index) =>
                    <th key={index} className="py-3">
                        {header}
                    </th>
                )
            }
        </tr>
    </thead>
)

export default TableHeader;