
<section className="bg-gray-100 py-10 px-4 md:px-10 lg:px-20">
  <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-6 md:p-10">
    <Table className="min-w-full text-left">
      <TableHeader>
        <TableRow className="border-b">
          <TableHead className="text-gray-500"></TableHead>
          <TableHead className="font-bold text-lg text-primary">WebHjerte</TableHead>
          <TableHead className="font-bold text-lg text-primary">Fuldtids Udvikler</TableHead>
          <TableHead className="font-bold text-lg text-primary">Andre Bureauer</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index} className="border-t">
            <TableCell className="text-gray-600 font-medium py-3">
              {item.category}
              </TableCell>
            <TableCell className="py-3 text-green-500 flex items-center">
              <Check className="mr-2" /> {item.webHjerte}
            </TableCell>
            <TableCell className="py-3 text-red-500 flex items-center">
              <X className="mr-2" /> {item.fullDev}
            </TableCell>
            <TableCell className="py-3 text-yellow-500 flex items-center">
              <Check className="mr-2" /> {item.agencies}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* Add footer if needed */}
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Footer Content</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  </div>
</section>
