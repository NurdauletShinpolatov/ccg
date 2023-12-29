import { Box, Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
	return (
		<Flex>
			<Box flex={1} overflowX="hidden">
				{/* may be header here */}
				<Outlet />
				{/* footer here */}
			</Box>
		</Flex>
	);
};
export default MainLayout;
